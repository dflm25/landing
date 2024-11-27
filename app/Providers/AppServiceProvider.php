<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        /* $this->app->singleton(AttributeRepository::class, function ($app) {
            return new AttributeRepository();
        });

        $this->app->singleton(AttributeValueRepository::class, function ($app) {
            return new AttributeValueRepository();
        });

        $this->app->singleton(AttributeService::class, function ($app) {
            return new AttributeService(
                $app->make(AttributeRepository::class),
                $app->make(AttributeValueRepository::class)
            );
        }); */
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
