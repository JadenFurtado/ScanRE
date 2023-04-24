<h1 align="center">ScanRE</h1>

![image](https://user-images.githubusercontent.com/52862591/234078731-eeb0144e-e945-435c-a865-e8e724d5d32b.png)

## A static code analysis toolkit built as a wrapper around SemGrep, ORT and other tools

## What is Static Code Analysis?

Static analysis is a method of debugging that is done by automatically examining the source code without having to execute the program. This provides developers with an understanding of their code base and helps ensure that it is compliant, safe, and secure. To find defects and violations of policies, checkers perform an analysis on the code.

![image](https://user-images.githubusercontent.com/52862591/234088790-64ded29a-f35e-4b25-a862-c59dced2fd71.png)

They operate by querying or traversing the model, looking for particular properties or patterns that indicate defects. Sophisticated symbolic execution techniques explore paths through a control-flow graph. The data structure representing paths that might be traversed by a program during its execution. A warning is generated, if the path exploration notices an anomaly.

To model and explore the astronomical number of combinations of circumstances, scanners employ a variety of strategies to ensure scalability. For example, procedures summaries are refined and compacted during the analysis, and paths are explored in an order that minimizes paging. 

### Prerequisits:
System having 8Gb RAM
,Linux/Windows (We recommend running the code in Linux)
,Docker
,Git
Python3 and pip

## Getting started!

### Running backend engine:
Navigate to the backend directory

- Create a virtualenvironment

For both Windows and Linux, you can start a virtualenvironment using: 
```
pip install virtualenv
virtualenv start myenv
source myenv/bin/activate
```

- Then, run 
```
./scaffold.sh
```
- Finally, run 
```
./run.sh
```

This starts the flask application that is a wrapper around Static code analysis tools

### Running the analytics tool(frontend):

- Clone a SOAR tool, in our case we have run our project using 
```
git clone git@github.com:JadenFurtado/SOARtool.git
# building
./dc-build.sh
# running (for other profiles besides mysql-rabbitmq look at https://github.com/DefectDojo/django-DefectDojo/blob/dev/readme-docs/DOCKER.md)
./dc-up.sh mysql-rabbitmq
# obtain admin credentials. the initializer can take up to 3 minutes to run
# use docker-compose logs -f initializer to track progress
docker-compose logs initializer | grep "Admin password:"
```
Dashboard:
![image](https://user-images.githubusercontent.com/52862591/234080979-0d4e7c8c-6627-437c-b375-f9b6e7752b73.png)

Grouping of vulnerabilities:
![image](https://user-images.githubusercontent.com/52862591/234081193-cd745d99-25c0-4d6d-95c7-c136e4448dda.png)

List of vulnerabilities:

![image](https://user-images.githubusercontent.com/52862591/234081368-c22ec05e-2e1e-420c-9675-e9823f007265.png)

Details of the finding:
![image](https://user-images.githubusercontent.com/52862591/234084081-7ab67248-5b01-4498-b8c6-d51ffd444153.png)


### Running the filemanager:

navigate to fileMangaer and run:
```
php -S 0.0.0.0:5555
```
## Architecture:

![image](https://user-images.githubusercontent.com/52862591/234079664-1aa1abee-299b-4b78-bbee-e027da26119a.png)

What was our motivation?
To help improve the security posture of open sourced software in the industry
![image](https://user-images.githubusercontent.com/52862591/234079995-43c5a83b-a1cc-420b-838c-1f0e86343d93.png)

We were inspired by the work showcased in NullCon22, Asia's largest cybersecurity conference. Links to the talks in the references section.

# Findings:
Our ultimate motivation with this projec, as mentioned before was to prioritize research over usability as a product. We have taken and made decisions to ensure that ScanRE works successfully as a product as well as performs well for it's original purpose, i.e. a tool to help researchers quickly scan multiple repositories and analyze the findings. We ran ScanRE over 3000 of the most popular repositories available on github. Out of these, we decided to prioritize 300 repositories as a sample. We got over 12,000 findings in them as shown, pending manual validation. ScanRE was able to identify insecure code patterns, and thus prooves effective as a tool for enforcing coding standards too. 

# Metrics:
Since the underlying system is primarily built on top of SemGrep, our performance is mainly determined by the performance of SemGrep. Semgrep is able to outperform GitGuardian and other code analysis tools, both, in terms of time taken and false positives flagged.

![image](https://user-images.githubusercontent.com/52862591/234083312-6bc6cec7-0312-45ef-ab36-a55b3f381efd.png)

Tree matching has a nearly negligible cost when compared to most deep program analysis techniques, such as pointer analysis or symbolic execution, so this was clearly a winning battle. As Semgrep grew more advanced, more features were added which caused it to err closer to the side of semantics, such as taint analysis and constant propagation.

These analyses are not necessarily ones that can be done quickly. Taint analysis, in particular, requires running dataflow analysis over the entire control flow of a program, which can potentially be huge, when considering how large an entire codebase may be, with all of its function calls and tricky control flow logic. To do taint analysis in this way would be to pick a losing battle.

Semgrep succeeds in that it only carries out single-file analysis, so the control flow graph never exceeds the size of a file. In addition, taint can be done incrementally. Functions have well-defined points where they begin and end, as well as generally well-defined entrances in terms of the data they accept (the function arguments). Thus, Semgrep collects taint summaries, which essentially (per function) encode the information about what taint may be possible, depending on the taint of the inputs that flow in.
![image](https://user-images.githubusercontent.com/52862591/234083232-4af327b3-5f37-4611-af16-237a73a128d6.png)

References:

* https://nullcon.net/goa-2022/hack-the-source
* https://nullcon.net/goa-2022/unearthing-malicious-and-other-risky-open-source-packages-using-packj
* https://nullcon.net/goa-2022/raining-CVEs-on-wordpress-plugins-with-semgrep
* https://semgrep.dev/blog/2022/static-analysis-speed
