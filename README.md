# fwendator ✨
### Generate an interactive graph of all your discord friends and the relations between them
<img src="https://github.com/Escartem/fwendator/blob/master/images/graph.png?raw=true" />

---
## [live demo available here](https://ena.escartem.eu.org/projects/fwendator/demo)
---
# What is this ?
### this is a simple project to see all of your friends connection in a interactive graph ([if gif doesn't load](https://github.com/Escartem/fwendator/blob/master/images/graph_interact.gif?raw=true))

<img src="https://github.com/Escartem/fwendator/blob/master/images/graph_interact.gif?raw=true" />

### you can also see the direct connections between each friend you have ([if gif doesn't load either](https://github.com/Escartem/fwendator/blob/master/images/graph_individual.gif?raw=true))

<img src="https://github.com/Escartem/fwendator/blob/master/images/graph_individual.gif?raw=true" />

---
## Additionnal explanation about the graph

* Each dot represent a friend you have on discord, and each line is when two of your friends are also friends together, so this show all of your friends and who they are friends with that is also your friend
* The most mutual friends you have with someone, the bigger the circle. And the color is also linked to the circle size
* You can also have circles alone, those are people that are friends with you, and none of all your others friends are friend with him
* Since there are only your friends, you are not inside the graph, furthermore this would have been a nightmare to display if you were in it since every single circle would be connected to you

---
# How to use

1) open [discord](https://discord.com/app) on your browser
2) open the devtools with `F12` or `ctrl + shift + i`
3) go to the console tab and paste this [code](https://raw.githubusercontent.com/Escartem/fwendator/master/getFriends.min.js)

I know that discord will show many warnings about not pasting random code into the console, and they are right, never paste code that you don't understand in random places. 

__To clarify; Yes, this piece of code will use your discord token; No, it won't be shared and only be used to get all of your friends on your account.__ 

You can check this code by looking at the [original file](https://github.com/Escartem/fwendator/blob/master/getFriends.js), and if you still don't trust it, just don't paste it

__Another warning, using discord api with a user token is considered self-botting and against ToS, by running this script you are technically against it, that doesn't mean you will get banned for doing so, but you do expose yourself of consequences from discord on your account, use at your own risk__

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

---

# Feel free to contribute to this project, or share it, anything would be appreciated <3
