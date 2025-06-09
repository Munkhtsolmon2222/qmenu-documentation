# Contributing to Qmenu Documentation

This guide will help you contribute content to the Qmenu documentation, even if you're not familiar with technical tools. We'll walk through the process step by step.

## 📋 Prerequisites

Before you start, you'll need:
1. A GitHub account
2. Git installed on your computer
3. A text editor (like Notepad++, Visual Studio Code, or any text editor you're comfortable with)

## 🚀 Getting Started

### 1. Setting Up Your Workspace

1. **Install Git**
   - Download Git from [git-scm.com](https://git-scm.com)
   - Follow the installation instructions for your operating system

2. **Clone the Repository**
   - Open your terminal/command prompt
   - Navigate to where you want to store the documentation
   - Run this command:
     ```bash
     git clone https://github.com/your-username/qmenu-documentation.git
     ```
   - Enter your GitHub credentials if prompted

### 2. Understanding the Documentation Structure

The documentation is organized in the `docs` folder with the following structure:
- `intro.md` - Introduction to Qmenu
- Numbered folders (1-login, 2-products, etc.) - Main documentation sections
- Each section contains markdown files and images

### 3. Creating and Editing Content

#### Adding New Content

1. **Create a New File**
   - Navigate to the appropriate folder in `docs`
   - Create a new file with `.md` extension (e.g., `new-feature.md`)
   - Use the following template:
     ```markdown
     # Title of Your Content

     ## Overview
     Brief description of what this section covers

     ## Steps
     1. First step
     2. Second step
     3. And so on...

     ## Tips
     - Helpful tip 1
     - Helpful tip 2
     ```

#### Adding Images

1. **Image Guidelines**
   - Use PNG or JPG format
   - Keep file sizes under 1MB
   - Use descriptive filenames (e.g., `login-screen.png`)

2. **Adding Images to Content**
   - Create an `images` folder in the relevant section if it doesn't exist
   - Place your images in this folder
   - Reference images in your markdown like this:
     ```markdown
     ![Description of image](images/your-image.png)
     ```

### 4. Markdown Basics

Here are some common markdown elements you'll use:

```markdown
# Main Heading
## Subheading
### Smaller Heading

- Bullet point
- Another bullet point

1. Numbered list
2. Second item

**Bold text**
*Italic text*

[Link text](https://example.com)

![Image description](path/to/image.png)
```

### 5. Submitting Your Changes

1. **Save Your Changes**
   - Save all your files
   - Make sure images are in the correct folders

2. **Commit Your Changes**
   - Open terminal/command prompt
   - Navigate to the documentation folder
   - Run these commands:
     ```bash
     git add .
     git commit -m "Description of your changes"
     git push
     ```

3. **Create a Pull Request**
   - Go to the GitHub repository
   - Click "New Pull Request"
   - Select your changes
   - Add a description of what you've changed
   - Submit the pull request

## 📝 Best Practices

1. **Content Guidelines**
   - Write clear, concise instructions
   - Use simple language
   - Include examples where helpful
   - Add screenshots for visual steps

2. **Organization**
   - Keep related content together
   - Use consistent naming conventions
   - Maintain the existing folder structure

3. **Images**
   - Use high-quality screenshots
   - Crop images to show only relevant areas
   - Add descriptive alt text

## 🆘 Need Help?

If you encounter any issues:
1. Check the [GitHub documentation](https://docs.github.com)
2. Contact the documentation team
3. Open an issue in the repository

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org)
- [GitHub Guides](https://guides.github.com)
- [Image Optimization Tools](https://tinypng.com)

---

Thank you for contributing to Qmenu documentation! Your help makes our documentation better for everyone. 