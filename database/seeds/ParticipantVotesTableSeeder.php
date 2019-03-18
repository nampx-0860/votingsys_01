<?php

use Illuminate\Database\Seeder;
use App\Models\ParticipantVote;

class ParticipantVotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(ParticipantVote::class, 10)->create();
    }
}
