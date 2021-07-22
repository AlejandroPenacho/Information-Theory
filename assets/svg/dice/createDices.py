
diceDots = [
	["middle"],
	["bottomleft", "topright"],
	["bottomleft", "middle", "topright"],
	["bottomleft", "bottomright", "topleft", "topright"],
	["middle", "bottomleft", "bottomright", "topleft", "topright"],
	["bottomleft", "bottomright", "topleft", "topright", "centerleft", "centerright"]
]

def checkSeveralStrings(strings, text):
	for currentString in strings:
		if currentString in text:
			return True
	return False

for diceNumber in range(1,7):

	baseDice = open("baseDice.svg")

	outDice = open(f"dice{diceNumber }.svg", "w")

	done = False

	while not done:
		currentLine = baseDice.readline()
		if currentLine == "":
			break

		if currentLine == "      <circle\n":
			circleGroup = currentLine
			for i in range(6):
				circleGroup += baseDice.readline()
			if checkSeveralStrings(diceDots[diceNumber -1],circleGroup):
				outDice.write(circleGroup)

		else:
			outDice.write(currentLine)

	baseDice.close()
	outDice.close()
	
