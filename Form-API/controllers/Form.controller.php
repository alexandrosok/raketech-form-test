<?php


namespace RakeTechTest;

class FormController
{

    /**
     * @param $data
     * @return array
     */
    public static function SetFormTitle($data)
    {
        $title = json_decode($data)->title;
        delete_option("form-title");
        add_option("form-title", $title);
        return [
            "status" => 'success',
            "message" => "Form Title stored",
            "data" => get_option("form-title")
        ];
    }

    /**
     * @param $data
     * @return array
     */
    public static function SetAbout($data)
    {
        $about = json_decode($data)->about;
        delete_option("form-about");
        add_option("form-about", $about);
        return [
            "status" => 'success',
            "message" => "About stored",
            "data" => get_option("form-about")
        ];
    }

    /**
     * @param $data
     * @return array
     */
    public static function SetCompanyDetails($data)
    {
        $details = json_decode($data)->CompanyDetails;
        delete_option("company-details");
        add_option("company-details", $details);
        return [
            "status" => 'success',
            "message" => "Company Details stored",
            "details" => get_option("company-details")
        ];
    }

    /**
     * @param $data
     * @return false|string
     */
    public static function SetSubmitMessage($data)
    {

        $message = json_decode($data)->message;
        delete_option("form-submit-message");
        add_option("form-submit-message", $message);
        return json_encode([
            "status" => 'success',
            "message" => "Submit Message stored",
            "data" => get_option("form-submit-message")
        ]);
    }

    /**
     * @return array
     */
    public static function GetSubmitMessage()
    {
        return [
            'submitMessage' => get_option("form-submit-message")
        ];
    }

    /**
     * @return array
     */
    public static function GetFormTitle()
    {
        return [
            'title' => get_option("form-title")
        ];
    }

    /**
     * @return array
     */
    public static function GetAbout()
    {
        return [
            'about' => get_option('form-about')
        ];
    }

    /**
     * @return array
     */
    public static function GetCompanyDetails()
    {
        return [
            'details' => get_option('company-details')
        ];
    }
}
