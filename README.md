# **"Talenify"** - Interactive React website.  :star:
-------
## Live Link: :ghost:
https://talenify.web.app/
--------------------

A robust platform for both job seekers and job posters, with user-friendly features for exploring, bidding on, and managing job listings in a secure and organized manner.
----------------------
 **Talenify** is an interactive react website, have several key functionalities that provide a comprehensive job hunting and posting experience. It is a website where users can see three categories job posts namely Web Development, Digital Marketing and Graphics Design. The user must be logged in to see details of any job post. Logged in user can also bid on a job posts in the details page and after biding, user will redirect to My Bid page, where he/she can get to view all their jpb biding data in a tabular from and also see their job biding status. In this user can also Add Job posts and in MY Posts page they can update and also delete their posts. In the Bid Request page they job poster can see all he data in a tabular form about who have already bid on his/her job post. In this whole project, I have used react jsx, router dom, tailwind css, daisy ui, firebase for authentication and some other extension for front end and for back-end I have used express js and used mongodb database. To securely transmit data between two parties JWT token is also implemented for authorization. 

 ------------------------

 ## Functionalities :star:
 
 - **User Authentication:**
 Users can create accounts and log in to access the full features of the website.
User authentication is handled securely using JWT (JSON Web Tokens) to protect user data and restrict access to certain routes to authorized users.

- **Job Exploration by Category:**
Users can explore job posts in three categories: Web Development, Digital Marketing, and Graphics.
Clicking on a category displays job posts specific to that category, allowing users to find jobs that match their interests.

- **Job Details and Bidding:**
After submitting a bid, users are redirected to the "My Bids" page, where they can view the status of their bids. In that case, the job poster can not bid on their own job post. Bids start with a "pending" status and can be updated when job posters accept or reject them.

- **Bid Submission and Tracking:**
After submitting a bid, users are redirected to the "My Bids" page, where they can view the status of their bids.
Bids start with a "pending" status and can be updated when job posters accept or reject them.

- **Job Posting and Management:**
Users can post job listings in the "Add Jobs" page, providing details about the job. In the "My Posted Jobs" page, users can update or delete their job listings.
Job Poster can also see how many other users have bid on their job postings.

- **Bid Request Management:**
In the "My Bid Request" page, users can see a tabular display of users who have bid on their job postings.Users can accept or reject bids from job seekers, and the status of the bids is updated accordingly.This functionality provides job posters with control over who they choose to work with.
