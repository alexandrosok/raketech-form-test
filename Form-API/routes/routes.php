<?php


namespace Raketech_Form_Test;

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
            }
        ));

        register_rest_route($this->namespace, '/manage/health', array(
            'methods' => 'GET',
            'callback' => function () {
                //return controller::getHealthReport();
            }
        ));
    }

    public function getNamespace()
    {
        return $this->namespace;
    }


}
