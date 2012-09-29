## Sheriff

The Open Badges server with an extremely simple interface

## Installation

0. Install [vagrant](http://downloads.vagrantup.com/) and
   [VirtualBox](https://www.virtualbox.org/wiki/Downloads),
   including the **VirtualBox Extension Pack**

1. Get into the vagrant Virtual Machine

        git clone git://github.com/BYUWeekendOfCode/Sheriff.git
        cd Sheriff
        vagrant up
        vagrant ssh
    
2. Fix the oopsies

        cd ~
        sudo chown -R vagrant:vagrant ~/
        
3. Run the daggon' thing!

        cd ~
        git clone git://github.com/BYUWeekendOfCode/Sheriff.git
        cd Sheriff
        npm install
        node server
        
4. Open the demo site in Chrome

        http://localhost:3000/admin/
