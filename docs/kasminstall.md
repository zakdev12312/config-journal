# kasminstall

# Kasm Workspaces 1.18.1 Installation

## Prerequisites

- [ ] A machine (VM or bare metal) running Ubuntu Desktop or Server 24.04
  
- [ ] Minimum requirements: 2 CPU cores, 4GB RAM and 100GB of SSD disk space
  
- [ ] Recommended requirements: 4 CPU cores, 8-16GB RAM and 150GB+ SSD disk space
  
- [ ] Root or `sudo` access  
  You need the ability to access the root user or run commands via `sudo` to install Kasm
  

- [ ] Docker Engine  
  You need the Docker engine installed for the Kasm Docker Images
  

- [ ] Internet Access  
  Stable connection for pulling down the workspaces  
  Ports 443 open (https)
  

- [ ] A configured Firewall
  
- [ ] `curl`, `tar` and `bash` installed
  
- [ ] Space in the `/tmp` directory
  

### Let’s get started

1.  Update the system  
    `sudo apt update && sudo apt upgrade -y`
2.  Move into the `/tmp` directory  
    `cd /tmp`
3.  Download the Kasm binary  
    `curl -O https://kasm-static-content.s3.amazonaws.com/kasm_release_1.18.0.tar.gz`
4.  Extract the binary  
    `tar -xf kasm_release_1.18.0.tar.gz`
5.  Run the automated installer  
    `sudo bash kasm_release/install.sh`
6.  Take note of the default credentials after the installer finishes
7.  Head out to port 443 inside the web browser  
    `https://your_device_ip:443`#
8.  Log in with the admin credentials  
    Email:`admin@kasm.local`  
    Password`password`
9.  Install some workspaces!  
    Head to Workspaces > Registries  
    Find one you like, and hit install
10. Swich to the Workspaces view  
    At the top of the screen, next to ‘Admin’, press on ‘Workspaces’  
    If your workspace installed, press it and hit ‘Launch Session’ and watch the magic happen!

This was just a basic setup guide. Thanks for reading!