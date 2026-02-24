exports.signin = async (req, res) => {
    try {
        res.status(200).json({ message: "login successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to signin' })

    }
}

exports.signout = async (req, res) => {
    try {
        res.status(200).json({ message: "signout successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to signout' })

    }
}


exports.registerEmployee = async (req, res) => {
    try {
        res.status(200).json({ message: "registerEmployee successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to registerEmployee' })

    }
}


exports.sendotp = async (req, res) => {
    try {
        res.status(200).json({ message: "send-otp successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to send-otp' })

    }
}

exports.verifyOtp = async (req, res) => {
    try {
        res.status(200).json({ message: "verifyOtp successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to verifyOtp' })

    }
}


exports.forgetPassword = async (req, res) => {
    try {
        res.status(200).json({ message: "forgetPassword successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to forgetPassword' })

    }
}
exports.changePassword = async (req, res) => {
    try {
        res.status(200).json({ message: "changePassword successs" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to changePassword' })

    }
}