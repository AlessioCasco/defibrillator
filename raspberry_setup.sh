# Upgrade and basic set-up
apt update
apt upgrade
apt install git wakeonlan

# Install node
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# clone code
git clone git@github.com:AlessioCasco/defibrillator.git
cd defibrillator

# configure service
tee -a /etc/systemd/system/defibrillator.service <<EOF
[Unit]
Description=Wake on Lan made simple

[Service]
Environment=NODE_PORT=3000
Type=simple
User=root
Restart=on-failure
WorkingDirectory=/root/defibrillator
ExecStart=npm run start

[Install]
WantedBy=multi-user.target
EOF

systemctl enable defibrillator.service
systemctl start defibrillator.service

# Install cloudflared
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm.deb &&
dpkg -i cloudflared.deb &&
cloudflared service install