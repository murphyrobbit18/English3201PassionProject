```python
from engi1020.arduino.api import *
from time import sleep
import random

sampX = []
sampY = []
sampZ = []

# Step 2.1: Implement Data Collection
def collectData(samples):
    accelX = three_axis_get_accelX()

    for i in range(samples):
        sampX.append(accelX)
    
    accelY = three_axis_get_accelY()

    for i in range(samples):
        sampY.append(accelY)
    
    accelZ = three_axis_get_accelZ()

    for i in range(samples):
        sampZ.append(accelZ)

    AveX = sum(sampX)/ len(sampX)
    AveY = sum(sampY)/ len(sampY)
    AveZ = sum(sampZ)/ len(sampZ)
    
    return AveX, AveY, AveZ

# Step 2.2 Implement the Decision Function    
def getResult(instruction):
    
    if instruction == InstructionList[0]:
        if AveY > 0:
            return False
        
        else:
            return True
        
    elif instruction == InstructionList[1]:
        if AveY < 0:
            return False
        else:
            return True

# Step 2.4: Allow the game to run continuously            
game = True

while game:   
    # Step 2.3: Incorporating the game
    InstructionList = ['flip to the left', 'flip to the right'] 
    instruction = random.choice(InstructionList)

    samples = 3
    AveX, AveY, AveZ = collectData(samples)

    print(f"Get ready to {instruction}\n")
    sleep(3)

    getResult(instruction)

    if getResult(instruction):
        print("Great job!\n")
        digital_write(4, False)
            
    else:
        print("Too slow\n")
        digital_write(4, True)
        sleep(3)
        digital_write(4, False)
        
    play = input("Would you like to play again (Y/N)? ")
    
    if play == "n" or play == "no" or play == "N" or play == "No":
        break
    
    elif play == "y" or play == "yes" or play == "Y" or play == "Yes":
        game = True
