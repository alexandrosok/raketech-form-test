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

        register_rest_route($this->namespace, '/form/submit-message', array(
            'methods' => 'POST',
            'callback' => function ($request) {
                return FormController::SetSubmitMessage($request->get_body());
            }
        ));

        register_rest_route($this->namespace, '/form/about', array(
            'methods' => 'POST',
            'callback' => function ($request) {
                return FormController::SetAbout($request->get_body());
            }
        ));

        register_rest_route($this->namespace, '/form/title', array(
            'methods' => 'POST',
            'callback' => function ($request) {
                return FormController::SetFormTitle($request->get_body());
            }
        ));

        register_rest_route($this->namespace, '/form/company-details', array(
            'methods' => 'POST',
            'callback' => function ($request) {
                return FormController::SetCompanyDetails($request->get_body());
            }
        ));

        register_rest_route($this->namespace, '/form/about/get', array(
            'methods' => 'GET',
            'callback' => function () {
                return FormController::GetAbout();
            }
        ));

        register_rest_route($this->namespace, '/form/submit-message/get', array(
            'methods' => 'GET',
            'callback' => function () {
                return FormController::GetSubmitMessage();
            }
        ));

        register_rest_route($this->namespace, '/form/title/get', array(
            'methods' => 'GET',
            'callback' => function () {
                return FormController::GetFormTitle();
            }
        ));

        register_rest_route($this->namespace, '/form/company-details/get', array(
            'methods' => 'GET',
            'callback' => function () {
                return FormController::GetCompanyDetails();
            }
        ));

        register_rest_route($this->namespace, '/health/status', array(
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
