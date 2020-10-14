<?php


namespace RakeTechTest;

class FormController
{

    /**
     * @param $data
     * @return false|string
     */
    public static function SetFormTitle($data)
    {
        $title = json_decode($data)->title;
        $FormField = get_option('form-title');
        if (!$FormField) {
            add_option("form-title", $title);
            return json_encode([
                "status" => 'success',
                "message" => "Form Title stored",
                "data" => get_option("form-title")
            ]);
        } else {
            delete_option("form-title");
            add_option("form-title", $title);
            return json_encode([
                "status" => 'success',
                "message" => "Form Title stored",
                "data" => get_option("form-title")
            ]);
        }
    }

    public static function SetAbout($data)
    {
        $about = json_decode($data)->about;
        $AboutField = get_option('form-about');
        if (!$AboutField) {
            add_option("form-about", $about);
            return json_encode([
                "status" => 'success',
                "message" => "About Content stored",
                "data" => get_option("form-about")
            ]);
        } else {
            delete_option("form-about");
            add_option("form-about", $about);
            return json_encode([
                "status" => 'success',
                "message" => "About stored",
                "data" => get_option("form-about")
            ]);
        }
    }

    public static function SetCompanyDetails($data)
    {
        $details = json_decode($data)->details;
        $CompanyDetailsField = get_option('company-details');
        if (!$CompanyDetailsField) {
            add_option("company-details", $details);
            return json_encode([
                "status" => 'success',
                "message" => "Company Details stored",
                "data" => get_option("company-details")
            ]);
        } else {
            delete_option("company-details");
            add_option("company-details", $details);
            return json_encode([
                "status" => 'success',
                "message" => "Company Details stored",
                "data" => get_option("company-details")
            ]);
        }
    }

    public static function SetSubmitMessage($data)
    {

        $message = json_decode($data)->message;
        $SubmitMessageField = get_option('form-submit-message');
        if (!$SubmitMessageField) {
            add_option("form-submit-message", $message);
            return json_encode([
                "status" => 'success',
                "message" => "Submit Message stored",
                "data" => get_option("form-submit-message")
            ]);
        } else {
            delete_option("form-submit-message");
            add_option("form-submit-message", $message);
            return json_encode([
                "status" => 'success',
                "message" => "Submit Message stored",
                "data" => get_option("form-submit-message")
            ]);
        }
    }

    public static function GetSubmitMessage()
    {
        return [
            'status' => 'success',
            'message' => 'Submit Message Record',
            'submitMessage' => get_option("form-submit-message")
        ];
    }

    public static function GetFormTitle()
    {
        return [
            'status' => 'success',
            'message' => 'Form Title Record',
            'title' => get_option("form-title")
        ];
    }

    public static function GetAbout()
    {
        return [
            'status' => 'success',
            'message' => 'About Content',
            'about' => get_option('form-about')
        ];
    }

    public static function GetCompanyDetails()
    {
        return [
            'status' => 'success',
            'message' => 'Company Details Record',
            'details' => get_option('company-details')
        ];
    }
}
