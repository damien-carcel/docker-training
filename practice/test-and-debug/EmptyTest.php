<?php

declare(strict_types=1);

namespace App\Tests;

use PHPUnit\Framework\TestCase;

final class EmptyTest extends TestCase
{
    public function testNothing(): void
    {
        $var = null;

        self::assertNull($var);
    }
}
