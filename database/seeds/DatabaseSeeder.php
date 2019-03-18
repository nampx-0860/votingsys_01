<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(PollsTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        $this->call(LinksTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(ParticipantsTableSeeder::class);
        $this->call(OptionsTableSeeder::class);
        $this->call(ParticipantVotesTableSeeder::class);
        $this->call(ActivitiesTableSeeder::class);
    }
}
