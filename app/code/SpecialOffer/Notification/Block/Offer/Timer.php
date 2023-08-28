<?php
namespace SpecialOffer\Notification\Block\Offer;

use Magento\Store\Model\ScopeInterface;

class Timer extends \Magento\Framework\View\Element\Template
{
    const CONFIG_PATH = 'payment_terms/general/';

    protected $scopeConfig;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    )
    {
        $this->scopeConfig = $scopeConfig;
        parent::__construct($context);
    }

    public function getConfigValue($field, $storeId = null)
    {
        return $this->scopeConfig->getValue(
            self::CONFIG_PATH . $field,
            ScopeInterface::SCOPE_STORE,
            $storeId
        );
    }

    public function getOfferData()
    {
        $data = [
            'text_before_time' =>$this->getConfigValue('text_before_time'),
            'start_time' => $this->getConfigValue('start_time'),
            'end_time' => $this->getConfigValue('end_time'),
            'text_after_time' => $this->getConfigValue('text_after_time')
        ];
        return !empty($data) ? json_encode($data) : '';
    }
}
