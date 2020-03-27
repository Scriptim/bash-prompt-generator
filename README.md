# [Bash Prompt Generator](https://scriptim.github.io/bash-prompt-generator)

![GitHub](https://img.shields.io/github/license/Scriptim/bash-prompt-generator)
![GitHub stars](https://img.shields.io/github/stars/Scriptim/bash-prompt-generator?style=social)
![GitHub forks](https://img.shields.io/github/forks/Scriptim/bash-prompt-generator?style=social)

Create a custom PS1 variable for your Bash.

![Screenshot (Browser)](img/screenshot_browser.jpg "Screenshot (Browser)")

**Example Prompt:**

![Screenshot (Terminal)](img/screenshot_terminal.jpg "Screenshot (Terminal)")

---

## Usage

- Click on an item in the selection on the left to add it to your prompt.
- Sort (drag and drop) or remove the elements of your prompt in the middle area.
- Click one of the elements of your prompt to change its properties (such as color or text style).
- When you are finished, run the line starting with `PS1=` in your bash to see your prompt. When you are happy with the result, append the line to your `~/.bashrc` file to set the prompt permanently.

## Colors

If you click on a color input field, a color picker with 16 colors opens, which are supported by practically every terminal emulator. Click on one of these colors to select it or press `ESC` to close the color picker.

If your terminal supports 256 colors, you can also enter a [color code](http://misc.flogisoft.com/_media/bash/colors_format/256_colors_bg.png "Overview of all colors") (0 - 255) manually.

## Function/Command element

The `Function/Command` element lets you call/run a function or a shell command.

### Example: Print the first private ip address

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

## See also

- [GNU Bash Manual: Controlling the Prompt](https://www.gnu.org/software/bash/manual/html_node/Controlling-the-Prompt.html)
- [ArchWiki: Bash/Prompt customization](https://wiki.archlinux.org/index.php/Bash/Prompt_customization)
