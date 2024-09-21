export const htmlContent: string = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fafc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            animation: slideIn 1s ease-out forwards;
        }
        @keyframes slideIn {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .banner {
            width: 100%;
            height: 200px;
            background-image: url('fast-bites-logo.png'); /* Replace with a food-related banner */
           background-size: contain;
            background-position: center;
            position: relative;
            animation: bannerMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bannerMove {
            0% {
                width: 300%;
                
            }
            100% {
                width: 100%;
            }
        }
        .header {
            text-align: center;
            padding: 30px;
            background-color: hsl(144, 96%, 9%); /* Vibrant orange for energy */
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            margin: 0;
        }
        .content {
            text-align: center;
            padding: 40px;
        }
        .content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 20px;
        }
        .content p {
            font-size: 18px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 25px;
        }
        .content strong {
            color: hsl(145, 96%, 21%);
        }
        .content .code {
            font-size: 28px;
            font-weight: bold;
            color: hsl(144, 96%, 9%); 
            margin: 20px 0;
            padding: 15px;
            border: 2px dashed hsl(145, 96%, 21%); 
            border-radius: 10px;
            background-color: #fff5f0;
            opacity: 0;
            animation: codeReveal 1.5s ease-out forwards;
        }
        @keyframes codeReveal {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        .quote {
            font-style: italic;
            color: hsl(144, 96%, 9%);
            text-align: center;
            border-left: 4px solid hsl(145, 96%, 21%);
            padding-left: 15px;
            margin: 30px 0;
            font-family: 'Playfair Display', serif;
        }
        /* .content .code {
            font-size: 28px;
            font-weight: bold;
            color: hsl(144, 96%, 9%); 
            margin: 20px 0;
            padding: 15px;
            border: 2px dashed hsl(145, 96%, 21%); 
            border-radius: 10px;
            background-color: #fff5f0;
            opacity: 0;
            animation: codeReveal 5s ease-out forwards;
        }
        @keyframes codeReveal {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        } */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f1f1f1;
            color: #888888;
        }
        .footer p {
            margin: 0;
        }

        /* Delivery Bike Animation */
        .delivery-animation {
            position: relative;
            overflow: hidden;
            height: 50px;
            margin: 40px 0 0 0;
        }
        .delivery-bike {
            position: absolute;
            bottom: 0;
            left: -60px; /* Starts off-screen */
            width: 60px;
            height: 40px;
            animation: bikeMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bikeMove {
            0% {
                left: 100%;
            }
            100% {
                right: 100%;
            }
        }
       .reset-password-button{
        padding: 16px 24px;
        background-color: hsl(144, 96%, 9%);
       border-radius: 20px;
       
       }
       .reset-password-button:hover{
        background-color: hsl(145, 96%, 21%);
        cursor: pointer;
        animation-delay: 2ms;
        transition:1s;
       }
       a{
        color: white;
        text-decoration: none;
       }
    </style>
</head>
<body>
    <div class="container">
        <!-- Banner Section -->
        

        <!-- Header Section -->
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="banner"></div>
        <!-- Main Content Section -->
        <div class="content">
            <h2>Verify Your Email!</h2>
            <p>We're excited to have you on board. To complete your registration, please enter the verification code below:</p>
            <div class="code">{verificationToken}</div>
            <p>If this wasn’t you, you can safely ignore this email. Enjoy your meals with Fast-Bites!</p>

            <div class="quote">
                “Good food is all the sweeter when shared with good friends.”<br><strong>– Fast-Bites Team</strong>
            </div>

            <p>
                If you have any questions or need assistance, our customer support team is always here for you. 
                Feel free to <a href="mailto:support@fast-bites.com" style="color: hsl(145, 96%, 21%); text-decoration: none;">reach out</a> at any time.
            </p>
       

        </div>

        <!-- Delivery Bike Animation Section -->
        <div class="delivery-animation">
            <img class="delivery-bike" src="Gemini_Generated_Image_8wkyr98wkyr98wky.png" alt="Delivery Bike"> <!-- Replace with an appropriate image URL -->
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 Fast-Bites. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

    `;

export const generateWelcomeEmailHtml = (name: string) => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fafc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            animation: slideIn 1s ease-out forwards;
        }
        @keyframes slideIn {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .banner {
            width: 100%;
            height: 200px;
            background-image: url('fast-bites-logo.png'); /* Replace with a food-related banner */
           background-size: contain;
            background-position: center;
            position: relative;
            animation: bannerMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bannerMove {
            0% {
                width: 300%;
                
            }
            100% {
                width: 100%;
            }
        }
        .header {
            text-align: center;
            padding: 30px;
            background-color: hsl(144, 96%, 9%); /* Vibrant orange for energy */
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            margin: 0;
        }
        .content {
            text-align: center;
            padding: 40px;
        }
        .content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 20px;
        }
        .content p {
            font-size: 18px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 25px;
        }
        .content strong {
            color: hsl(145, 96%, 21%);
        }
        .quote {
            font-style: italic;
            color: hsl(144, 96%, 9%);
            text-align: center;
            border-left: 4px solid hsl(145, 96%, 21%);
            padding-left: 15px;
            margin: 30px 0;
            font-family: 'Playfair Display', serif;
        }
        /* .content .code {
            font-size: 28px;
            font-weight: bold;
            color: hsl(144, 96%, 9%); 
            margin: 20px 0;
            padding: 15px;
            border: 2px dashed hsl(145, 96%, 21%); 
            border-radius: 10px;
            background-color: #fff5f0;
            opacity: 0;
            animation: codeReveal 5s ease-out forwards;
        }
        @keyframes codeReveal {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        } */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f1f1f1;
            color: #888888;
        }
        .footer p {
            margin: 0;
        }

        /* Delivery Bike Animation */
        .delivery-animation {
            position: relative;
            overflow: hidden;
            height: 50px;
            margin: 40px 0 0 0;
        }
        .delivery-bike {
            position: absolute;
            bottom: 0;
            left: -60px; /* Starts off-screen */
            width: 60px;
            height: 40px;
            animation: bikeMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bikeMove {
            0% {
                left: 100%;
            }
            100% {
                right: 100%;
            }
        }
       .reset-password-button{
        padding: 16px 24px;
        background-color: hsl(144, 96%, 9%);
       border-radius: 20px;
       
       }
       .reset-password-button:hover{
        background-color: hsl(145, 96%, 21%);
        cursor: pointer;
        animation-delay: 2ms;
        transition:1s;
       }
       a{
        color: white;
        text-decoration: none;
       }
    </style>
</head>
<body>
    <div class="container">
        <!-- Banner Section -->
        

        <!-- Header Section -->
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="banner"></div>
        <!-- Main Content Section -->
        <div class="content">
            <h2>Welcome to Fast-Bites, <strong>${name}</strong></h2>
            <p>
                Your email has been successfully verified, and your account is now active! 
                We're thrilled to have you join our community of food lovers. At Fast-Bites, you’ll discover 
                a world of delicious meals, all just a click away. Whether you’re craving comfort food or looking to try 
                something new, we’ve got you covered.
            </p>

            <h2>What’s Next?</h2>
            <p>
                Now that your account is all set, dive into the Fast-Bites experience. Explore our wide variety of cuisines, 
                carefully crafted by top chefs from around the world, and enjoy quick and easy delivery right to your doorstep.
            </p>

            <div class="quote">
                “Good food is all the sweeter when shared with good friends.”<br><strong>– Fast-Bites Team</strong>
            </div>

            <p>
                If you have any questions or need assistance, our customer support team is always here for you. 
                Feel free to <a href="mailto:support@fast-bites.com" style="color: hsl(145, 96%, 21%); text-decoration: none;">reach out</a> at any time.
            </p>
       

        </div>

        <!-- Delivery Bike Animation Section -->
        <div class="delivery-animation">
            <img class="delivery-bike" src="Gemini_Generated_Image_8wkyr98wkyr98wky.png" alt="Delivery Bike"> <!-- Replace with an appropriate image URL -->
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 Fast-Bites. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
        `;
};

export const generatePasswordResetEmailHtml = (resetURL: string) => {
    return `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fafc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            animation: slideIn 1s ease-out forwards;
        }
        @keyframes slideIn {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .banner {
            width: 100%;
            height: 200px;
            background-image: url('fast-bites-logo.png'); /* Replace with a food-related banner */
           background-size: contain;
            background-position: center;
            position: relative;
            animation: bannerMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bannerMove {
            0% {
                width: 300%;
                
            }
            100% {
                width: 100%;
            }
        }
        .header {
            text-align: center;
            padding: 30px;
            background-color: hsl(144, 96%, 9%); /* Vibrant orange for energy */
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            margin: 0;
        }
        .content {
            text-align: center;
            padding: 40px;
        }
        .content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 20px;
        }
        .content p {
            font-size: 18px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 25px;
        }
        .content strong {
            color: hsl(145, 96%, 21%);
        }
        .quote {
            font-style: italic;
            color: hsl(144, 96%, 9%);
            text-align: center;
            border-left: 4px solid hsl(145, 96%, 21%);
            padding-left: 15px;
            margin: 30px 0;
            font-family: 'Playfair Display', serif;
        }
        /* .content .code {
            font-size: 28px;
            font-weight: bold;
            color: hsl(144, 96%, 9%); 
            margin: 20px 0;
            padding: 15px;
            border: 2px dashed hsl(145, 96%, 21%); 
            border-radius: 10px;
            background-color: #fff5f0;
            opacity: 0;
            animation: codeReveal 5s ease-out forwards;
        }
        @keyframes codeReveal {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        } */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f1f1f1;
            color: #888888;
        }
        .footer p {
            margin: 0;
        }

        /* Delivery Bike Animation */
        .delivery-animation {
            position: relative;
            overflow: hidden;
            height: 50px;
            margin: 40px 0 0 0;
        }
        .delivery-bike {
            position: absolute;
            bottom: 0;
            left: -60px; /* Starts off-screen */
            width: 60px;
            height: 40px;
            animation: bikeMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bikeMove {
            0% {
                left: 100%;
            }
            100% {
                right: 100%;
            }
        }
       .reset-password-button{
        padding: 16px 24px;
        background-color: hsl(144, 96%, 9%);
       border-radius: 20px;
       
       }
       .reset-password-button:hover{
        background-color: hsl(145, 96%, 21%);
        cursor: pointer;
        animation-delay: 2ms;
        transition:1s;
       }
       a{
        color: white;
        text-decoration: none;
       }
    </style>
</head>
<body>
    <div class="container">
        <!-- Banner Section -->
        

        <!-- Header Section -->
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="banner"></div>
        <!-- Main Content Section -->
        <div class="content">
            <p>Hi,</p>
              <p>We received a request to reset your password. Click the button below to reset it.</p>
              <button class="reset-password-button"><a href="${resetURL}">Reset Password</a></button>
              <p>If you didn't request a password reset, please ignore this email.</p>
              <p>Thank you,<br/>The Fast-Bites Team</p>

            <div class="quote">
                “Good food is all the sweeter when shared with good friends.”<br><strong>– Fast-Bites Team</strong>
            </div>

            <p>
                If you have any questions or need assistance, our customer support team is always here for you. 
                Feel free to <a href="mailto:support@fast-bites.com" style="color: hsl(145, 96%, 21%); text-decoration: none;">reach out</a> at any time.
            </p>
       

        </div>

        <!-- Delivery Bike Animation Section -->
        <div class="delivery-animation">
            <img class="delivery-bike" src="Gemini_Generated_Image_8wkyr98wkyr98wky.png" alt="Delivery Bike"> <!-- Replace with an appropriate image URL -->
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 Fast-Bites. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `;
  };

  export const generateResetSuccessEmailHtml = () => {
    return `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fafc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            animation: slideIn 1s ease-out forwards;
        }
        @keyframes slideIn {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .banner {
            width: 100%;
            height: 200px;
            background-image: url('fast-bites-logo.png'); /* Replace with a food-related banner */
           background-size: contain;
            background-position: center;
            position: relative;
            animation: bannerMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bannerMove {
            0% {
                width: 300%;
                
            }
            100% {
                width: 100%;
            }
        }
        .header {
            text-align: center;
            padding: 30px;
            background-color: hsl(144, 96%, 9%); /* Vibrant orange for energy */
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            margin: 0;
        }
        .content {
            text-align: center;
            padding: 40px;
        }
        .content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 20px;
        }
        .content p {
            font-size: 18px;
            color: hsl(144, 96%, 9%);
            margin-bottom: 25px;
        }
        .content strong {
            color: hsl(145, 96%, 21%);
        }
        .quote {
            font-style: italic;
            color: hsl(144, 96%, 9%);
            text-align: center;
            border-left: 4px solid hsl(145, 96%, 21%);
            padding-left: 15px;
            margin: 30px 0;
            font-family: 'Playfair Display', serif;
        }
        /* .content .code {
            font-size: 28px;
            font-weight: bold;
            color: hsl(144, 96%, 9%); 
            margin: 20px 0;
            padding: 15px;
            border: 2px dashed hsl(145, 96%, 21%); 
            border-radius: 10px;
            background-color: #fff5f0;
            opacity: 0;
            animation: codeReveal 5s ease-out forwards;
        }
        @keyframes codeReveal {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        } */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f1f1f1;
            color: #888888;
        }
        .footer p {
            margin: 0;
        }

        /* Delivery Bike Animation */
        .delivery-animation {
            position: relative;
            overflow: hidden;
            height: 50px;
            margin: 40px 0 0 0;
        }
        .delivery-bike {
            position: absolute;
            bottom: 0;
            left: -60px; /* Starts off-screen */
            width: 60px;
            height: 40px;
            animation: bikeMove 7s linear infinite; /* Continuous movement */
        }
        @keyframes bikeMove {
            0% {
                left: 100%;
            }
            100% {
                right: 100%;
            }
        }
       .reset-password-button{
        padding: 16px 24px;
        background-color: hsl(144, 96%, 9%);
       border-radius: 20px;
       
       }
       .reset-password-button:hover{
        background-color: hsl(145, 96%, 21%);
        cursor: pointer;
        animation-delay: 2ms;
        transition:1s;
       }
       a{
        color: white;
        text-decoration: none;
       }
    </style>
</head>
<body>
    <div class="container">
        <!-- Banner Section -->
        

        <!-- Header Section -->
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="banner"></div>
        <!-- Main Content Section -->
        <div class="content">
            <p>Hi,</p>
            <p>Your password has been successfully reset. You can now log in with your new password.</p>
            <p>If you did not request this change, please contact our support team immediately.</p>
            <p>Thank you,<br/>The Fast-Bites Team</p>

            <div class="quote">
                “Good food is all the sweeter when shared with good friends.”<br><strong>– Fast-Bites Team</strong>
            </div>

            <p>
                If you have any questions or need assistance, our customer support team is always here for you. 
                Feel free to <a href="mailto:support@fast-bites.com" style="color: hsl(145, 96%, 21%); text-decoration: none;">reach out</a> at any time.
            </p>
       

        </div>

        <!-- Delivery Bike Animation Section -->
        <div class="delivery-animation">
            <img class="delivery-bike" src="Gemini_Generated_Image_8wkyr98wkyr98wky.png" alt="Delivery Bike"> <!-- Replace with an appropriate image URL -->
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 Fast-Bites. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `;
  };