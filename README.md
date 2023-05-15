# fwendator ✨
### Generate an interactive graph of all your discord friends and the relations between them !
<img src="https://github.com/Escartem/fwendator/blob/master/images/graph.png?raw=true" />

---
# What is this ?
### this is a simple project to see all of your friends connection in a interactive graph

<img src="https://github.com/Escartem/fwendator/blob/master/images/graph_interact.gif?raw=true" />

### you can also see the direct connections between each friend you have

<img src="https://github.com/Escartem/fwendator/blob/master/images/graph_individual.gif?raw=true" />

---
# How to use

1) open [discord](https://discord.com/app) on your browser
2) open the devtools with `F12` or `ctrl + shift + i`
3) go to the console tab and paste this [code](https://raw.githubusercontent.com/Escartem/fwendator/master/getFriends.min.js)

(I am aware that discord will show many warnings about not pasting random code into the console, and they are right, you can check this code by looking at the [original file](https://raw.githubusercontent.com/Escartem/fwendator/master/getFriends.js), and if you still don't trust it, just don't paste it)

4) after pasting it and running it, it should start processing your friends, now you just need to wait

<img src="https://github.com/Escartem/fwendator/blob/master/images/process.gif?raw=true" />

5) once it's done, you should have a page showing the generated data, and a button to download it, you just need to click on it

<img src="https://github.com/Escartem/fwendator/blob/master/images/result.png?raw=true" />

6) now you need to clone this repo (with `git clone https://github.com/Escartem/fwendator` for example) and make sure you have both python and pyvis version 0.3.1 installed (with `pip install pyvis==0.3.1`)
7) run the python file with `python graph.py`, it will ask you to choose a .json file, select the one you downloaded earlier, and then the script should finish and generate a webpage in the `output` folder
8) and now you just need to open `nx.html` in that folder and you can explore your friends graph :D

---
# Todo :
- [ ] make a website where people can just upload the json file and see the graph
- [ ] optimise web ui
- [ ] add friends pfp on the graph
- [ ] handle new upcomming discord username system

# Feel free to contribute to this project, or share it, anything would be appreciated <3
