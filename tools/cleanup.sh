#!/bin/bash

cd /opt/builds/companion 
find . -type f -print0 |
xargs -0 stat --printf "%Y %n\n" |
egrep 'companion.+(zip|exe|gz)' | 
grep -v stable |
perl -e'while(<>){chomp;@a=split / /,$_;if (int($a[0]) < time() - 60*60*24*7 ) {print $a[1]."\n"}}' | 
xargs rm

