<?php


namespace RakeTechTest;
include_once($_SERVER["DOCUMENT_ROOT"] . "/wp-content/plugins/raketech-form-test/Form-API/controllers/FormClient.controller.php");

class FormClientRoutes
{
    static $namespace = "/raketech-form-test/v1";

    public static function FormClientRoutes()
    {
        register_rest_route(self::$namespace, '/form-client/submit-message', array(
            'methods' => 'POST',
            'callback' => function ($request) {
                return FormClientController::ClientSubmitMessage($request->get_body());
            }
        ));
        register_rest_route(self::$namespace, '/form-client/submit-message/get', array(
            'methods' => 'GET',
            'callback' => function ($request) {
                return FormClientController::ClientSubmitMessage($request->get_body());
            }
        ));
    }
}
