import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { usePedometerContext as usePedometer } from "@/lib/pedometer-context";
import { useMilestoneAlerts } from "@/hooks/use-milestone-alerts";
import { useColors } from "@/hooks/use-colors";
import { useEffect } from "react";

export default function HomeScreen() {
  const colors = useColors();
  const { state, settings, isPedometerAvailable, updateSettings, changeChronology } = usePedometer();
  const { triggerAlert } = useMilestoneAlerts(settings);

  // Déclencher les alertes quand un jalon est atteint
  useEffect(() => {
    if (state.milestonesReached.length > 0) {
      const lastMilestone = state.milestonesReached[state.milestonesReached.length - 1];
      triggerAlert(lastMilestone);
    }
  }, [state.milestonesReached.length, triggerAlert]);

  const handleChronologyChange = (chronologyId: number) => {
    changeChronology(chronologyId);
  };

  const handleDistanceChange = (value: number) => {
    updateSettings({ totalDistance: value });
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        <View className="gap-6">

          {/* En-tête */}
          <View className="items-center gap-2">
            <Text className="text-4xl font-bold text-primary">Chronolovia - chronologie marchée</Text>
            <Text className="text-sm text-muted text-center">
              Partez à la découverte d'un moment d'histoire en marchant !
            </Text>
          </View>

          {/* Bibliothèque de chronologies */}
          <View className="bg-surface rounded-2xl p-4 border border-border gap-4">
            <Text className="text-lg font-semibold text-foreground">Bibliothèque de chronologies</Text>
            <Text className="text-sm text-muted">Sélectionnez une chronologie à parcourir</Text>
            <View className="gap-2">
              {[
                { id: 1, name: "Chronologie Archéologique Marchée" },
                { id: 2, name: "Photographie" },
                { id: 3, name: "Chronologie 3" },
                { id: 4, name: "Chronologie 4" },
                { id: 5, name: "Chronologie 5" },
              ].map((chrono) => {
                const isActive = settings.chronologyId === chrono.id;
                return (
                  <TouchableOpacity
                    key={chrono.id}
                    onPress={() => handleChronologyChange(chrono.id)}
                    className={`py-3 px-4 rounded-lg border-2 flex-row items-center justify-between ${
                      isActive ? "border-primary bg-primary/10" : "border-border bg-background"
                    }`}
                  >
                    <Text className={`font-medium ${isActive ? "text-primary" : "text-foreground"}`}>
                      {chrono.name}
                    </Text>
                    {isActive && <Text className="text-primary font-bold">✓</Text>}
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity className="py-3 px-4 rounded-lg bg-primary/10 border border-primary items-center mt-2">
              <Text className="text-primary font-semibold">+ Ajouter une chronologie</Text>
            </TouchableOpacity>
          </View>

          {/* Distance totale */}
          <View className="bg-surface rounded-2xl p-4 border border-border gap-4">
            <Text className="text-lg font-semibold text-foreground">Distance totale</Text>
            <Text className="text-sm text-muted">
              Définissez la longueur totale de la chronologie
            </Text>
            <View className="gap-3">
              {[
                { dist: 100.2,    label: "Sprint",     sub: "100m" },
                { dist: 501,      label: "Balade",     sub: "500m" },
                { dist: 1002.050, label: "Promenade",  sub: "1km" },
                { dist: 2004.1,   label: "Randonnée",  sub: "2km" },
              ].map((option) => (
                <TouchableOpacity
                  key={option.dist}
                  onPress={() => handleDistanceChange(option.dist)}
                  className={`py-3 px-4 rounded-lg border-2 items-center ${
                    Math.abs(settings.totalDistance - option.dist) < 0.5
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background"
                  }`}
                >
                  <Text className={`font-semibold ${
                    Math.abs(settings.totalDistance - option.dist) < 0.5 ? "text-primary" : "text-foreground"
                  }`}>
                    {option.label}
                  </Text>
                  <Text className="text-xs text-muted mt-1">{option.sub}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Statut du podomètre */}
          <View className="bg-surface rounded-2xl p-4 border border-border">
            <Text className="text-xs text-muted font-semibold mb-2">STATUT</Text>
            <View className="flex-row items-center gap-2">
              <View className={`w-3 h-3 rounded-full ${isPedometerAvailable ? "bg-success" : "bg-error"}`} />
              <Text className="text-sm text-foreground">
                {isPedometerAvailable ? "Podomètre disponible" : "Podomètre non disponible"}
              </Text>
            </View>
            <Text className="text-xs text-muted mt-2">
              {state.isWalking ? "⏱️ En cours..." : "⏸️ Arrêté"}
            </Text>
          </View>

          {/* Jalons atteints */}
          {state.milestonesReached.length > 0 && (
            <View className="bg-success/10 rounded-2xl p-4 border border-success">
              <Text className="text-xs text-success font-semibold mb-2">
                🏆 JALONS ATTEINTS ({state.milestonesReached.length})
              </Text>
              <Text className="text-sm text-foreground">
                {state.milestonesReached[state.milestonesReached.length - 1].title}
              </Text>
            </View>
          )}

        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
