# Bash Prompt Generator

Generate the PS1 variable to customize your bash prompt

![Screenshot (Browser)](img/screenshot_browser.jpg "Screenshot (Browser)")

**Result:**

![Screenshot (Terminal)](img/screenshot_terminal.jpg "Screenshot (Terminal)")

---

## How To

- Click on an element to the left to add it to your prompt
- Select an added element to change its properties
- Drag the added elements to change the order
- When you're done, copy the line starting with `PS1=` and run it in a terminal to test it; if you're satisfied with the result append this line to your `~/.bashrc` file

## Colors

When an color input field gets focused a color picker will appear. Press `ESC` to close it.

The color picker lets you select a 8/16 color but you can also manually enter a [256 color number](http://misc.flogisoft.com/_media/bash/colors_format/256_colors_bg.png "Overview of all colors"). Note that not all terminals support 256 colors.

## Function/Command

The `Function/Command` element lets you call/run a function or a shell command.

### Example: print the first private ip address

#### Function

Define the following function in your `~/.bashrc` file

    function ip_addr() {
      ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/'
    }

Then select a `Function/Command` element and enter the name of the function followed by parantheses `()`

    ip_addr()

#### Command

Select a `Function/Command` element and enter a command to be executed by the shell

    ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/'
