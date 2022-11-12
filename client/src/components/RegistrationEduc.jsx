const RegistrationEduc = () => {
    return (
        <div class="login">
            <h1>Registration for Educators</h1>
            <form action="/auth" method="post">
                <label for="username">
                    Email:
                </label>
                <input type="text" name="email" placeholder="Email" id="email" required></input>

                <label for="fname">
                    First Name:
                </label>
                <input type="text" name="fname" placeholder="First Name" id="fname" required></input>

                <label for="mname">
                    Middle Name:
                </label>
                <input type="text" name="mname" placeholder="Middle Name" id="mname" required></input>

                <label for="lname">
                    Last Name:
                </label>
                <input type="text" name="lname" placeholder="Last Name" id="lname" required></input>

                <label for="password">
                    Password: 
                </label>
                <input type="password" name="password" placeholder="Password" id="password" required></input>

                <label for="metaAddress">
                    Metamask Address:
                </label>
                <input type="text" name="metaAddress" placeholder="Address" id="metaAddres" required></input>
                <label for="curricVitae">
                    Curriculum Vitae:
                </label>
                <input type="file" name="curricVitae" id="curricVitae" required></input>
                <label for="displayedName">
                    Preferred Displayed Name:
                </label>
                <input type="text" name="displayedName" id="displayedName" required></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}

export default RegistrationEduc;