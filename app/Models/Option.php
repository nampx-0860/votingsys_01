<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Poll;
use App\Models\ParticipantVote;

class Option extends Model
{
    protected $fillable = [
        'poll_id',
        'name',
        'image',
        'description',
    ];

    public function poll()
    {
        return $this->belongsTo(Poll::class);
    }

    public function participantVotes()
    {
        return $this->hasMany(ParticipantVote::class);
    }
}
