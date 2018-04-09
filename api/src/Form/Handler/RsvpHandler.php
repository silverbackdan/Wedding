<?php

namespace App\Form\Handler;

use Symfony\Component\HttpFoundation\JsonResponse;

class RsvpHandler
{
    private $mailer;

    public function __construct(
        \Swift_Mailer $mailer
    ) {
        $this->mailer = $mailer;
    }

    public function success(JsonResponse $response)
    {
        $message = new \Swift_Message('Wedding RSVP');
        $message
            ->setFrom('daniel.west00@outlook.com')
            ->setTo(['daniel@silverback.is' => 'Daniel West', 'suzanne_byrne@hotmail.co.uk' => 'Suzanne Byrne'])
            ->setBody(
                $response->getContent(),
                'text/plain'
            )
        ;
        if(!$this->mailer->send($message)) {
            throw new \RuntimeException('Mailer failed to send any emails');
        }
    }
}
