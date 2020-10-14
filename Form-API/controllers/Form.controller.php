<?php


namespace RakeTechTest;


use PHPMailer\PHPMailer\Exception;
use function Sodium\add;

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

    public static function SetCompanyDetails()
    {

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

    }
}
