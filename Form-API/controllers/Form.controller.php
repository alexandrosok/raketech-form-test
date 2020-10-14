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

    public static function SetAbout()
    {

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

    }

    public static function GetCompanyDetails()
    {
        return get_option('company-details');
    }
}
