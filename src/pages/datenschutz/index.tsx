import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import React from "react";

const Datenschutz = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">Datenschutzerklärung</h1>
        <div className="mb-8">
          <div className="mb-4">
            <b>Erfassung allgemeiner Informationen</b>
          </div>
          <div className="mb-2">
            Beim Zugriff auf diese Webseite werden automatisch
            Verbindungsinformationen allgemeiner Natur erfasst.
          </div>
          <div className="mb-2">
            Diese Server-Logfiles enthalten möglicherweise Informationen zu
            Ihrem Webbrowser oder Ihrem Betriebssystem.
          </div>
          <div className="mb-2">
            Diese Informationen lassen keine direkten Rückschlüsse auf Ihre
            Person zu, werden automatisch nach 30 Tagen gelöscht und dienen
            ausschließlich der Aufrechterhaltung des technischen Betriebs.
          </div>
          <div className="mb-4 mt-4">
            <b>Cookies</b>
          </div>
          <div className="mb-2">
            Diese Webseite verwendet ein sogenanntes Session-Cookie.
          </div>
          <div className="mb-2">
            Es dient der korrekten Anzeige unserer Webseite, befindet sich
            ausschließlich auf Ihrem Computer und wird nach dem Besuch unserer
            Webseite automatisch gelöscht.
          </div>
          <div className="mb-2">
            Unter dem Menüpunkt Kontakt / Referenzen wird eine
            Google-Maps-Anfahrtskizze geladen.
          </div>
          <div className="mb-2">
            Dabei wird Ihr Webbrowser mit einem Google-Server verbunden und es
            werden Daten ausgetauscht, wie z.B. Google-Cookies.
          </div>
          <div className="mb-2">
            Auf dieser Webseite werden keine weiteren Online-Identifikatoren
            erfasst und es werden keine Daten an Dritte, wie z.B. Google oder
            Facebook, übermittelt, noch werden Verfahren zur automatisierten
            Entscheidungsfindung (z.B. Profiling) eingesetzt.
          </div>
          <div className="mb-4 mt-4">
            <b>Einbettung externer Inhalte</b>
          </div>
          <div className="mb-2">
            Wir folgen dem Grundsatz, keine Inhalte von fremden Servern zu
            laden.
          </div>
          <div className="mb-2">
            Eine Ausnahme erfolgt ausschließlich dann, wenn Inhalte technisch
            nicht lokal bereitgestellt werden können. Dies betrifft die
            browserabhängige Bereitstellung von Javascript/CSS/Font-Daten für
            eine einheitliche Darstellung der Webinhalte. Das kann auch bei der
            Einbettung von Videos der Fall sein, um auf Streamingressourcen
            zugreifen zu können, die nur extern vorhanden sind. In diesen Fällen
            sendet Ihr Browser selbst entsprechende Daten an den jeweiligen
            externen Server.
          </div>
          <div className="mb-4 mt-4">
            <b>Datenschutz bei Kontaktaufnahme</b>
          </div>
          <div className="mb-2">
            Die Verbindung zu dieser Webseite erfolgt per HTTPS nach einem
            SSL-Verschlüsselungsverfahren, das durch regelmäßige Updates dem
            jeweils aktuellen Stand der Technik angepasst wird.
          </div>
          <div className="mb-2">
            Demzufolge werden auch die im Kontaktformular eingetragenen Daten
            abhörsicher übermittelt.
          </div>
          <div className="mb-2">
            Wenn Sie Kontakt aufnehmen (per E-Mail oder Kontaktformular), werden
            die von Ihnen gemachten Angaben gespeichert.
          </div>
          <div className="mb-2">
            Dies dient ausschließlich der Bearbeitung Ihrer Anfrage gemäß DSGVO
            Art. 6: Rechtmäßigkeit der Verarbeitung.
          </div>
          <div className="mb-2">
            Grundsätzlich werden keine erhobenen Daten an Dritte weitergegeben.
          </div>
          <div className="mb-4 mt-4">
            <b>Recht auf Widerruf und Beschwerde</b>
          </div>
          <div className="mb-2">
            Sie haben das Recht auf Einschränkung oder Widerruf der Verarbeitung
            Ihrer personenbezogenen Daten sowie das Recht, eine Beschwerde bei
            den Landesbeauftragten für den Datenschutz und die
            Informationsfreiheit einzulegen.
          </div>
          <div className="mb-2">
            Unabhängig davon erteilen wir Ihnen Auskunft über erhobene Daten und
            berichtigen bzw. löschen diese auf Ihren Wunsch.
          </div>
          <div className="mb-2">
            Unter Berücksichtigung der gesetzlichen Aufbewahrungspflichten
            werden diese Daten gelöscht, wenn sie für die Zwecke, für die sie
            erhoben oder verarbeitet wurden, nicht mehr notwendig sind.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Datenschutz;
