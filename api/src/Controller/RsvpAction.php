<?php

namespace App\Controller;


use App\Form\Handler\RsvpHandler;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class RsvpAction extends AbstractController
{
    /**
     * @Route("/rsvp")
     * @Method({"POST"})
     * @param Request $request
     */
    public function __invoke(Request $request)
    {
        $json = $request->getContent();
        $data = json_decode($json, true);
        $response = new JsonResponse();
        $response->setEncodingOptions($response->getEncodingOptions() | JSON_PRETTY_PRINT);
        $response->setData([
            'data' => $data
        ]);
        $this->container->get(RsvpHandler::class)->success($response);
        return $response;
    }

    public static function getSubscribedServices()
    {
        return array_merge(
            parent::getSubscribedServices(),
            [
                RsvpHandler::class
            ]
        );
    }
}
