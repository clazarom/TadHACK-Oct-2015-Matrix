__author__= 'Caterina Lazaro'
import sys
import cgi
import cgitb
import json

def set_choice(req):
    print ("set choice")
    data = json.load(sys.stdin)
    print(data)
    form = cgi.FieldStorage()
    print(form.keys)
    name = form["user"].value
    password = form.getvalue('pw')
    print (name);
    print (password);
    
    return 1

