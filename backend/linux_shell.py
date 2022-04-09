from getpass import getpass
import paramiko as miko

from paramiko import SSHException

class LinuxSSH():
    def __init__(self, user, password):
        self.user = user
        self.password = password
        self.client = miko.SSHClient()
        self.ssh = None

    def log_in(self):
        ''' 
        Create SSH connection to Linux TC computer
        '''

        self.client.set_missing_host_key_policy(miko.AutoAddPolicy())
        self.client.connect('155.198.232.140', username=self.user, password=self.password)
        self.ssh = self.client.invoke_shell()

    def stitch(self, mouse_name, start, end, channel, downsize = None):
        '''
        Start stiching scripts for Linux TC computer
        '''
        try:
            self.ssh.sendall('cd ./DeepCATS-AD/stitching/python/\n')
            self.ssh.sendall('ipython parasyncstitching_svp.py\n')
            self.ssh.sendall('/mnt/TissueCyte30TB/' + mouse_name + '\n')
            self.ssh.sendall(str(start) + '\n')
            self.ssh.sendall(str(end) + '\n')
            self.ssh.sendall('\n')
            self.ssh.sendall('\n')
            self.ssh.sendall(str(channel)+'\n')
            self.ssh.sendall(str(downsize)+'\n')

        except:
            raise SSHException('SSH connection does not exist')
        
def main():
    shortcode = input("Input your Imperial shortcode: ")
    password = getpass("Input your password: ")
    linuxSSH = LinuxSSH(user = shortcode, password = password)
    linuxSSH.log_in() 

if __name__ == '__main__':
    main()
