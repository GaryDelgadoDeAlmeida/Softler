<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/{level0}', name: 'app_index', defaults: ["level0" => null])]
    #[Route('/{level0}/{level1}', name: 'app_index', defaults: ["level0" => null, "level1" => null])]
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }
}
