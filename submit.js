
///
/// \fn     toHex
/// \brief  Converts the given number into hexidecimal form.
///
/// \param  number      The number to be converted into hex.
///
/// \return The number in hexidecimal, as a string.
///
function toHex (number)
{
    // Make sure the number passed in is an integer.
    if (Number.isInteger(number) == false)
        return "00";

    // Convert the given number to a string, and make it
    // uppercase.
    var str = number.toString(16).toUpperCase();

    // Format the hexidecimal string, such that it appears as
    // "00" to "0F" if the number is less than 16.
    if (number < 16)
    {
        return "0" + str;
    }
    else
    {
        return str;
    }
}

// Run this code once the webpage finishes loading.
$(document).ready(function () {
    // Run this code when one of the color sliders' value has changed.
    $(".color-slider").change(function () {
        // Get the value of the color sliders.
        var r = $("#red-slider").prop("value");
        var g = $("#green-slider").prop("value");
        var b = $("#blue-slider").prop("value");

        // Use the JQ CSS function to change the background of the page body
        // to the color specified by the sliders.
        $("body").css(
            "background-color",
            "rgb(" + r + ", " + g + ", " + b + ")"
        );

        // Display the RGB values of the color in the first h4 element.
        $("#rgb-display").text(
            "RGB: " + r + ", " + g + ", " + b
        );

        // Display the hexidecimal value of the color in the second h4 element.
        $("#hex-display").text(
            "Hexidecimal: #" +
            toHex(Number(r)) +
            toHex(Number(g)) +
            toHex(Number(b))
        );
    });
});
