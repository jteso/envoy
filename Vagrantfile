# -*- mode: ruby -*-
# vi: set ft=ruby :
@script = <<SCRIPT
SRCROOT="/opt/go"

if [ -f "/home/vagrant/VAGRANT_PROVISION" ]; then
  echo "VM already provisioned"
  exit 0
fi

# Install Go
sudo apt-get update
sudo apt-get install -y build-essential mercurial git-core
sudo git clone -b release-branch.go1.4 https://go.googlesource.com/go ${SRCROOT}
cd ${SRCROOT}/src
sudo ./all.bash

# Setup the GOPATH
sudo mkdir -p /opt/gopath
cat <<EOF >/tmp/gopath.sh
#export EXPRESSEN_PATH="/opt/gopath/src/bitbucket.com/ligrecito/expressen"
export GOPATH="/opt/gopath"
export PATH="/opt/go/bin:\$GOPATH/bin:\$PATH"
EOF
sudo mv /tmp/gopath.sh /etc/profile.d/gopath.sh
sudo chmod 0755 /etc/profile.d/gopath.sh

# Make sure the gopath is usable by bamboo
sudo chown -R vagrant:vagrant $SRCROOT
sudo chown -R vagrant:vagrant /opt/gopath

# Install go tools
go get golang.org/x/tools/cmd/cover 

#Install PostgreSQL
sudo apt-get install -y  postgresql postgresql-contrib
sudo -u postgres createuser --superuser --createdb vagrant

# EDIT /etc/postgresql/9.1/main/pg_hba.conf
# IPv4 local connections: host all all 127.0.0.1/32 trust
# IPv6 local connections: host all all ::1/128 trust

createdb xprssn_db

sudo service postgresql restart
touch /home/vagrant/VAGRANT_PROVISION
SCRIPT

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"


Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.provision 'shell', inline: @script

  config.vm.box = "ubuntu/trusty64"
  config.vm.box_url = "file:///Users/javi/.vagrant.d/boxes/precise64.box"

  config.vm.network :forwarded_port, guest:8080, host:8080, auto_correct: true
  config.vm.network :forwarded_port, guest:9000, host:9000, auto_correct: true

  config.vm.network "private_network", ip: "10.5.5.5"
  config.vm.synced_folder ".", "/opt/gopath/src/github.com/jteso/envoy"

  config.vm.provider "virtualbox" do |vb|
  #   # Don't boot with headless mode
  #   vb.gui = true
  
  #   # Use VBoxManage to customize the VM. For example to change memory:
     vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
  
end
