<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Productline
 * 
 * @property string $productLine
 * @property string $textDescription
 * @property string $htmlDescription
 * @property mediumblob $image
 * 
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Productline extends Model
{
	protected $table = 'productlines';
	protected $primaryKey = 'productLine';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'image' => 'mediumblob'
	];

	protected $fillable = [
		'textDescription',
		'htmlDescription',
		'image'
	];

	public function products()
	{
		return $this->hasMany(Product::class, 'productLine');
	}
}
