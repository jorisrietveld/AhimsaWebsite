<?php

namespace JorisRietveld\AhimsaSiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontEndController extends Controller
{
    public function indexAction()
    {
        return $this->render( 'JorisRietveldAhimsaSiteBundle:FrontEnd:index.html.twig' );
    }

    public function dispatchAction( $template )
    {
        return $this->render('JorisRietveldAhimsaSiteBundle:'.$template);
    }
}
