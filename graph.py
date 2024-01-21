from pyvis.network import *
import json
import os
import tkinter as tk
from tkinter import filedialog
import shutil

# set up graph
net = Network(
	notebook=False,
	directed=False,
	height="100%",
	width="100%",
	select_menu=True,
	bgcolor="#222222",
	font_color="white"
)

net.set_options("""
const options = {
  "physics": {
	"forceAtlas2Based": {
	  "theta": 0.1,
	  "gravitationalConstant": -136,
	  "springLength": 100
	},
	"minVelocity": 0.75,
	"solver": "forceAtlas2Based"
  }
}
""")

def getColor(v):
	colors = [
		"#800080",
		"#FF3F00",
		"#FFB400",
		"#FFFF33",
		"#00FF80",
		"#00BFFF",
		"#572382",
		"#EE2E99"
	]
	thresholds = [0, 3, 5, 7, 14, 19, 25]
	index = 0

	for i, threshold in enumerate(thresholds):
		if v > threshold:
			index = i + 1

	return colors[index]

cwd = os.getcwd()
# select file
root = tk.Tk()
root.withdraw()

filename = filedialog.askopenfilename(initialdir=cwd, title="Choose your generated json file", filetypes=[("JSON file", "*.json")])

# loads data
with open(filename, encoding='utf-8') as file:
	data = json.load(file)

print("building graph...")

# add points
for elem in data:
	mutual_size = len(data[elem]["mutual"])
	net.add_node(elem, label=data[elem]["name"], size=24+5*mutual_size, color=getColor(mutual_size))

# connect them
for elem in data:
	for mutual in data[elem]["mutual"]:
		if mutual in list(data.keys()):
			net.add_edge(elem, mutual)

# generate graph
net.set_template_dir(cwd, "template.html")
if os.path.exists("output"):
	shutil.rmtree("output")
os.makedirs("output")
os.chdir("output")
net.save_graph("nx.html")
