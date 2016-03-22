<?php
    header('Access-Control-Allow-Origin: *');
    echo file("/home/pi/pulses.txt")[0];