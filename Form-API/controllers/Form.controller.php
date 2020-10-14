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

    public static function GetFormTitle()
    {
        return get_option("form-title");
    }

    public static function GetAbout()
    {
        return get_option('form-about');
    }

    public static function GetCompanyDetails()
    {
        return get_option('company-details');
    }
}
