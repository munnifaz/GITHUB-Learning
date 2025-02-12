                        # ROCK PAPER SCISSORS GAME

import random  # importing the random package that helps computer to select randomly

options = ("rock", "paper", "scissors")  # tuples of choices
name = input("Enter your name: ") # enter player's name
running = True # initiating continuous gameplay with new rounds as a bool variable

while running: # putting the bool value into a while loop

    computer = random.choice(options)  # asking computer to select a random from options
    player = input(f"Nice to have you in the game, {name}. Please pick from rock, paper or scissors: ") # letting user input with their choice
    # printing the inputs
    print(f"Computer's pick: {computer}")
    print(f"{name}'s pick: {player}")

# here comes the real game, deciding the winner with the help of control flow statement (if, elif, else)
    if player == computer:
            print("It's a tie ;), let's play again")
    elif (player == "rock" and computer == "scissors") or \
            (player == "paper" and computer == "rock") or \
            (player == "scissors" and computer == "paper"):
            print("Hurray!! you win")
    else:
         print("Uh Oh :( Computer wins")
# asking player's choice to end the game, if player wants to end, the loop ends
    play_again = input("Would you like to play again ? (y/n):")
    if play_again == "n":
        running = False


print(f"It was nice playing with you {name}!!")


