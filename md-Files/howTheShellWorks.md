# How The Shell Works

  The shell is a command-line interface that allows users to interact with the operating system. It takes commands from the user and executes them, providing output and feedback. The shell acts as an intermediary between the user and the operating system, making it easier to perform tasks such as running programs, managing files, and navigating the file system.

```ts
echo $PATH 
```

  Echo is a command that prints the value of the PATH environment variable to the terminal. The ($) sign is called the "dollar sign" or "variable expansion operator" and it simply instructs the shell to replace the variable name with its value. The PATH variable is a list of directories that the shell searches through for executable files when a command is entered.

```ts
PATH.:$PATH
```

  The dot (.) in the PATH variable represents the current directory. The colon (:) is used to separate it from every thing after and the dollar sign ($) is used to reference the existing PATH variable. So what the statement above is saying is, take the current directory and everything that was already on path, and reassign it all back to the PATH variable in that order. 
  