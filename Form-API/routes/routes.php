<?php

namespace RakeTechTest;
include_once($_SERVER["DOCUMENT_ROOT"] . "/wp-content/plugins/raketech-form-test/Form-API/controllers/Health.controller.php");
include_once($_SERVER["DOCUMENT_ROOT"] . "/wp-content/plugins/raketech-form-test/Form-API/controllers/Form.controller.php");

class Router extends \WP_REST_Controller
{
    protected $namespace;

    public function __construct()
    {
        $this->namespace = "/raketech-form-test/v1";
    }

    /**
     * router initializer
     */
    public function InitializeRoutes()
    {
        register_rest_route($this->namespace, '/', array(
            'methods' => 'POST',
            'callback' => function ($request) {
                return controller::getPlugInLogo($request->get_body());
            }
        ));

        register_rest_route($this->namespace, '/manage/health', array(
            'methods' => 'GET',
            'callback' => function () {
                return HealthController::GetHealthStatus();
            }
        ));
    }

    public function getNamespace()
    {
        return $this->namespace;
    }


}
