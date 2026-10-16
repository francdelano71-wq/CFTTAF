<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->foreignId('category_id')->constrained('categories')->onDelete('restrict');
            $table->text('short_description');
            $table->longText('description');
            $table->string('cover_image');
            $table->string('duration_text')->default('1 an avec stage');
            $table->text('access_requirements');
            $table->json('skills_json');
            $table->json('career_outcomes_json')->nullable();
            $table->text('stage_information');
            $table->string('diploma_type')->default('DQP / CQP / AQP');
            $table->enum('status', ['published', 'draft', 'archived'])->default('published');
            $table->integer('sort_order')->default(0);
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();
        });

        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->unique();
            $table->string('full_name');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('city');
            $table->foreignId('formation_id')->constrained('formations')->onDelete('restrict');
            $table->string('education_level');
            $table->enum('preferred_contact_method', ['phone', 'whatsapp', 'email'])->default('whatsapp');
            $table->text('message')->nullable();
            $table->timestamp('privacy_consent_at');
            $table->enum('status', ['new', 'contacted', 'under_review', 'accepted', 'rejected', 'closed'])->default('new');
            $table->text('admin_notes')->nullable();
            $table->timestamps();
        });

        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('subject');
            $table->text('message');
            $table->enum('status', ['new', 'read', 'replied', 'archived'])->default('new');
            $table->timestamps();
        });

        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('setting_key')->unique();
            $table->longText('setting_value');
            $table->timestamps();
        });

        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('admin_user_id')->nullable();
            $table->string('action');
            $table->string('entity_type');
            $table->string('entity_id');
            $table->json('metadata')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('contact_messages');
        Schema::dropIfExists('applications');
        Schema::dropIfExists('formations');
        Schema::dropIfExists('categories');
    }
};
