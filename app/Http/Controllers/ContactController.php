<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'nome' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'telefone' => 'required|string|min:10|max:30',
            'mensagem' => 'required|string|min:10',
        ]);

        try {
            $recipient = config('mail.contact_to', env('CONTACT_MAIL_TO'));

            if (!$recipient) {
                Log::error('CONTACT_MAIL_TO is not configured. Contact form submission lost.', $validated);
                return back()->with('error', 'Erro interno ao enviar mensagem. Tente novamente mais tarde.');
            }

            Mail::to($recipient)->send(new ContactFormMail(
                nome: $validated['nome'],
                email: $validated['email'],
                telefone: $validated['telefone'],
                mensagem: $validated['mensagem'],
            ));

            return back()->with('success', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
        } catch (\Exception $e) {
            Log::error('Failed to send contact form email: ' . $e->getMessage(), $validated);

            return back()->with('error', 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.');
        }
    }
}
