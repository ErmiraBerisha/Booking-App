mkdir MyFolder
mkdir HTML
touch index.html
touch HTML/index.html
clear
git clone https://github.com/entorarifi/test_git.git
git status
cd
git config --global user.name "ErmiraBerisha"
git config --global user.email ermira.berisha@riinvest.net
git clone https://github.com/ErmiraBerisha/git-test.git
ls
cd test-git
cd git-test
ls
git add text.txt
git add text.txt.txt
git status
git commit -m "first commit" text.txt.txt
git push -u origin master 
git push -u origin main
cd
cd git-test
git remote add origin git@github.com:ErmiraBerisha/git-test.git
git config --global user.name "ErmiraBerisha"
git config --global user.email ermira.berisha@riinvest.net
ls
git add test.txt
git status
git commit -m "first commit" test.txt
git push -u origin main
