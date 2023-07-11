#!/bin/bash

cd ~/.cloudflared
nohup cloudflared tunnel run limyinshan-tunnel > cloudflared.log 2>&1 &