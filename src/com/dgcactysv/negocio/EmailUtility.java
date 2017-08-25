package com.dgcactysv.negocio;

import java.io.File;
import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

/**
 * A utility class for sending e-mail messages
 * @author www.codejava.net
 *
 */
public class EmailUtility {
	public static void sendEmail(String host, String port,
			final String userName, final String password, String toAddress,
			String subject, String message, File file) throws AddressException,
			MessagingException {

		// sets SMTP server properties
		Properties properties = new Properties();
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", port);
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");

		// creates a new session with an authenticator
		Authenticator auth = new Authenticator() {
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(userName, password);
			}
		};

		Session session = Session.getInstance(properties, auth);

		// creates a new e-mail message
		Message msg = new MimeMessage(session);

		msg.setFrom(new InternetAddress(userName));
		InternetAddress[] toAddresses = { new InternetAddress(toAddress) };
		msg.setRecipients(Message.RecipientType.TO, toAddresses);
		msg.setSubject(subject);
		msg.setSentDate(new Date());
		//msg.setText(message);
		// msg.setDataHandler(new DataHandler(new FileDataSource("d:/Logo.png")));
		//msg.setFileName("Logo.png");
		
		BodyPart adjunto = new MimeBodyPart();
		//la ruta del archivo adjunto tiene que ser la ruta del webContent
		
		adjunto.setDataHandler(new DataHandler(new FileDataSource(file)));
		adjunto.setFileName("Logo.png");
		
		BodyPart texto = new MimeBodyPart();
		texto.setText(message);
		
		MimeMultipart multiParte = new MimeMultipart();
		multiParte.addBodyPart(texto);
		multiParte.addBodyPart(adjunto);
		
		msg.setContent(multiParte);
		
		//http://www.chuidiang.org/java/herramientas/javamail/enviar-adjuntos-javamail.php

		// sends the e-mail
		Transport.send(msg);

	}
}
