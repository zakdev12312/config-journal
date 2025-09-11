## Complete KasmCE Installation Guide on Ubuntu Server VM (Hyper-V)
Part 1: Setting up Ubuntu Server VM in Hyper-V

Prerequisites:
Windows 10/11 Pro/Enterprise with Hyper-V enabled
At least 8GB RAM available for the VM
60GB+ free disk space (100GB recommended)
Ubuntu Server 22.04 LTS ISO downloaded

Step 1: Enable Hyper-V (if not already enabled)
Open PowerShell as Administrator and run:
```

Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```
Restart your computer when prompted.
Step 2: Create Virtual Switch
Open Hyper-V Manager
Click Virtual Switch Manager in the right panel
Select External and click Create Virtual Switch
Name it "External Switch" and select your network adapter
Click Apply and OK

Step 3: Create Ubuntu Server VM
In Hyper-V Manager, click New → Virtual Machine
Follow the wizard:

Name: Ubuntu-KasmCE
Generation: Generation 2
Memory: 8192 MB (8GB) minimum
Connection: External Switch (created above)
Virtual Hard Disk: 60GB minimum
Installation Options: Select Ubuntu Server ISO

Important: Before starting, configure VM settings:
Right-click VM → Settings
Security → Uncheck "Enable Secure Boot"
Processor → Set to 4 virtual processors minimum
Memory → Enable Dynamic Memory (optional)

Step 4: Install Ubuntu Server
Start the VM and connect to it

Follow Ubuntu installation:
Select language and keyboard layout
Choose "Ubuntu Server" installation
Configure network (use DHCP for simplicity)
Create user account (remember credentials)
Important: Select "Install OpenSSH server" when prompted
Select additional software if needed

Complete installation and reboot
After reboot, log in and update:
```bash
sudo apt update && sudo apt upgrade -y
```
Part 2: Network Configuration

Step 1: Configure Static IP (Recommended)
Find your current IP and network info: 
```bash

ip addr show
ip route show
```
Edit netplan configuration:
```bash

sudo nano /etc/netplan/00-installer-config.yaml
```
Configure static IP (adjust values for your network):
```bash
network:
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
  version: 2
  ```
  Apply configuration:
  ```bash
  sudo netplan apply
  ```
  
  Step 2: Configure Firewall
  ```bash
  
  # Enable UFW
sudo ufw enable

# Allow SSH
sudo ufw allow 22

# Allow KasmCE ports
sudo ufw allow 443
sudo ufw allow 80

# Check status
sudo ufw status
```
Part 3: Installing KasmCE

Step 1: Install Prerequisites
```bash

# Update system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y \
    curl \
    wget \
    gnupg \
    lsb-release \
    apt-transport-https \
    ca-certificates \
    software-properties-common
    ```
    Step 2: Install Docker
    ```
    
    # Remove old Docker versions
sudo apt remove docker docker-engine docker.io containerd runc

# Add Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add user to docker group
sudo usermod -aG docker $USER

# Enable Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Logout and login again for group changes to take effect
exit
```
Log back in via SSH and verify Docker:
```bash

docker --version
docker compose version
```
Step 3: Download and Install KasmCE
```bash

# Create installation directory
mkdir ~/kasm-install
cd ~/kasm-install

# Download latest KasmCE
wget https://kasm-static-content.s3.amazonaws.com/kasm_release_1.14.0.3a7abb.tar.gz

# Extract the archive
tar -xf kasm_release_*.tar.gz

# Navigate to installation directory
cd kasm_release/

# Make installation script executable
chmod +x install.sh

# Run the installation (this will take several minutes)
sudo bash install.sh
```
Step 4: Installation Configuration
During installation, you'll be prompted for:

Swap file: Accept default (2GB) or adjust based on your VM's RAM
Database passwords: Set strong passwords (save these!)
API user password: Set a strong password
Registration token: Leave blank unless you have one
Public hostname: Use your VM's IP address or domain name
The installer will:

Download and configure all Docker containers
Set up the database
Configure nginx
Create SSL certificates
Start all services

Part 4: Post-Installation Configuration

Step 1: Verify Installation
```bash

# Check if all containers are running
sudo docker ps

# Check Kasm status
sudo /opt/kasm/bin/stop
sudo /opt/kasm/bin/start

# View logs if needed
sudo docker logs kasm_db
sudo docker logs kasm_api
sudo docker logs kasm_manager
```
Step 2: Initial Access
Open a web browser and navigate to:
https://YOUR_VM_IP_ADDRESS (e.g., https://192.168.1.100 )
You'll see a security warning due to self-signed certificate - proceed anyway
Login with default admin credentials:
Username: admin@kasm.local
Password: The password you set during installation
Step 3: Basic Configuration
Change Admin Password:
Go to Admin → Users
Click on admin user and change password
Configure Workspaces:
Go to Admin → Workspaces
Enable desired workspaces (Ubuntu, Chrome, etc.)
User Management:
Create additional users in Admin → Users
Assign workspaces to users
Part 5: SSL Certificate Configuration (Optional but Recommended)

Option 1: Let's Encrypt (if you have a domain)
```bash
# Install certbot
sudo apt install -y certbot

# Stop nginx temporarily
sudo docker stop kasm_proxy

# Get certificate (replace with your domain)
sudo certbot certonly --standalone -d yourdomain.com

# Copy certificates to Kasm directory
sudo cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem /opt/kasm/current/certs/kasm_nginx.crt
sudo cp /etc/letsencrypt/live/yourdomain.com/privkey.pem /opt/kasm/current/certs/kasm_nginx.key

# Set proper permissions
sudo chown kasm:kasm /opt/kasm/current/certs/kasm_nginx.*

# Restart Kasm
sudo /opt/kasm/bin/stop
sudo /opt/kasm/bin/start
```
Option 2: Self-Signed Certificate (Default)
The installation creates self-signed certificates automatically. To regenerate:
```bash

sudo /opt/kasm/bin/stop
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /opt/kasm/current/certs/kasm_nginx.key \
    -out /opt/kasm/current/certs/kasm_nginx.crt \
    -subj "/C=US/ST=VA/L=Any/O=Kasm/OU=Kasm/CN=kasm.local"
sudo chown kasm:kasm /opt/kasm/current/certs/kasm_nginx.*
sudo /opt/kasm/bin/start
```
Part 6: System Management
Useful Commands
```bash
# Start Kasm services
sudo /opt/kasm/bin/start

# Stop Kasm services
sudo /opt/kasm/bin/stop

# View service status
sudo docker ps -a

# View logs
sudo docker logs kasm_api
sudo docker logs kasm_db
sudo docker logs kasm_manager

# Backup database
sudo /opt/kasm/bin/backup --backup-dir /tmp/

# Update Kasm (when new version available)
cd ~/kasm-install
# Download new version and run upgrade script
```

System Monitoring
```bash

# Check system resources
htop
df -h
free -h

# Monitor Docker containers
sudo docker stats

# Check Kasm specific logs
sudo tail -f /opt/kasm/current/log/api.log
sudo tail -f /opt/kasm/current/log/manager.log
```
Part 7: Accessing from Host Machine
Method 1: Direct IP Access
Open browser on Windows host
Navigate to https://VM_IP_ADDRESS
Accept security warning for self-signed certificate
Method 2: Port Forwarding (if using NAT)
If your VM uses NAT instead of External Switch:

In Hyper-V Manager, go to VM Settings
Add Network Adapter with NAT switch
Configure port forwarding in Hyper-V NAT settings
Method 3: DNS Configuration
Add entry to Windows hosts file:

Edit C:\Windows\System32\drivers\etc\hosts as Administrator
Add line: VM_IP_ADDRESS kasm.local
Access via https://kasm.local
Troubleshooting
Common Issues
Services won't start:
```bash

sudo docker system prune -f
sudo /opt/kasm/bin/stop
sudo /opt/kasm/bin/start
```

Low disk space:
```bash

sudo docker system prune -a
sudo apt autoremove -y
```
Performance issues:
Increase VM RAM to 16GB+
Add more CPU cores
Enable nested virtualization if needed
Network connectivity:
```bash

# Test connectivity
ping google.com
nslookup google.com

# Check firewall
sudo ufw status verbose
```
Database issues:
```bash

# Reset database (WARNING: This removes all data)
sudo /opt/kasm/bin/stop
sudo docker volume rm kasm_db_1.14.0
sudo /opt/kasm/bin/start
```
Log Locations
Application logs: /opt/kasm/current/log/
Docker logs: sudo docker logs <container_name>
System logs: /var/log/syslog
Security Considerations
Change default passwords
Enable firewall with only necessary ports
Regular updates: sudo apt update && sudo apt upgrade
Monitor logs for suspicious activity
Use strong SSL certificates in production
Limit user access appropriately
Regular backups of configuration and data
Your KasmCE installation is now complete and ready to use! You can access it from your Windows host machine and start creating containerized desktop sessions.